import { getWebInstrumentations, initializeFaro, UserActionInstrumentation } from '@grafana/faro-web-sdk'
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

export function initFaro() {
    if (typeof window !== 'undefined') {
        initializeFaro({
        url: 'https://faro-collector-prod-sa-east-1.grafana.net/collect/857715f4133863ff696cded10f691b82',
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