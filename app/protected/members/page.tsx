"use client"

import { useState } from "react"
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreateEventDialog } from "./new-event"
import { EventCard } from "@/components/event-card"
import type { Event, Pledge } from "@/types/events"


// Sample data - replace with actual data fetching
const sampleEvents: Event[] = [
  {
    id: "1",
    title: "House Cleaning",
    date: "2024-02-01",
    time: "14:00",
    points: 10,
    location: "Chapter House",
    hosts: [{ id: "1", name: "John Doe", email: "john@example.com" }],
    signedUpPledges: 5
  }
]

const assignedPledge = {
  id: "1",
  name: "Alex Smith",
  totalPoints: 45,
  daysRemaining: 21,
  eventsSignedUp: []
}

export default function MemberDashboard() {
  const [events, setEvents] = useState<Event[]>(sampleEvents)
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false)

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Member Dashboard</h1>
        <Button onClick={() => setIsCreateEventOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Create Event
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Assigned Pledge of the Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-lg font-medium">{assignedPledge.name}</p>
              <p className="text-sm text-muted-foreground">
                Current Points: {assignedPledge.totalPoints}
              </p>
              <p className="text-sm text-muted-foreground">
                Days Remaining: {assignedPledge.daysRemaining}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold">{events.length}</p>
              <p className="text-sm text-muted-foreground">Total Events Scheduled</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Your Events</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <CreateEventDialog
        open={isCreateEventOpen}
        onOpenChange={setIsCreateEventOpen}
        onEventCreate={(newEvent) => {
          setEvents([...events, newEvent])
          setIsCreateEventOpen(false)
        }}
      />
    </div>
  )
}