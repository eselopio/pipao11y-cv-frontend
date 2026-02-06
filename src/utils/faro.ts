import { getWebInstrumentations, initializeFaro, UserActionInstrumentation } from '@grafana/faro-web-sdk'
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

export function initFaro() {
    if (typeof window !== 'undefined') {
        initializeFaro({
        url: import.meta.env.PUBLIC_FARO_URL,
        app: {
        name: 'pipa11y-cv',
        version: '1.0.0',
        environment: 'production'
        },
        
        instrumentations: [
        // Mandatory, omits default instrumentations otherwise.
        ...getWebInstrumentations(),
    
        // Tracing package to get end-to-end visibility for HTTP requests.
        new TracingInstrumentation(),
        new UserActionInstrumentation(),
        ],
        });
    }
}   