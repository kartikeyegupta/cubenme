export interface Member {
    id: string
    name: string
    email: string
  }
  
  export interface Event {
    id: string
    title: string
    date: string
    time: string
    points: number
    location: string
    hosts: Member[]
    signedUpPledges: number
  }
  
  export interface Pledge {
    id: string
    name: string
    totalPoints: number
    daysRemaining: number
    eventsSignedUp: Event[]
  }
  