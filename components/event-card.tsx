import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CalendarIcon, Clock, MapPin, Users } from 'lucide-react'
import type { Event } from "@/types/events"

interface EventCardProps {
  event: Event
  showSignUp?: boolean
  onSignUp?: () => void
}

export function EventCard({ event, showSignUp, onSignUp }: EventCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2 text-sm">
          <CalendarIcon className="h-4 w-4" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Clock className="h-4 w-4" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <MapPin className="h-4 w-4" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Users className="h-4 w-4" />
          <span>{event.signedUpPledges} pledges signed up</span>
        </div>
        <div className="text-sm font-medium">
          Points: {event.points}
        </div>
      </CardContent>
      {showSignUp && (
        <CardFooter>
          <Button onClick={onSignUp} className="w-full">
            Sign Up for Event
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}