export interface Human {
  basics: HumanBasics
  now: Now
  activities: Array<Activity>
  future: Future
}

interface HumanBasics {
  nickname: string
  tagline: string
  image: string
  mood: string
}

interface Now {
  title: string
  summary: string
}

interface Activity {
  icon: string
  title: string
  status: string
  description: string
  period: string
}

interface Future {
  title: string
  summary: string
  goals: Array<string>
}
