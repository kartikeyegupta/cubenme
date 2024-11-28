"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { EventCard } from "@/components/event-card"
import type { Event, Pledge } from "@/types/events"

// Sample data - replace with actual data fetching
const samplePledge: Pledge = {
  id: "1",
  name: "Alex Smith",
  totalPoints: 45,
  daysRemaining: 21,
  eventsSignedUp: []
}

const availableEvents: Event[] = [
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

export default function PledgeDashboard() {
  const [pledge, setPledge] = useState<Pledge>(samplePledge)
  const pointsGoal = 100 // Example goal

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Pledge Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Points Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={(pledge.totalPoints / pointsGoal) * 100} />
              <p className="text-sm text-muted-foreground">
                {pledge.totalPoints} / {pointsGoal} points
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Days Remaining</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl font-bold">{pledge.daysRemaining}</p>
              <p className="text-sm text-muted-foreground">Until completion</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Events Signed Up</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl font-bold">{pledge.eventsSignedUp.length}</p>
              <p className="text-sm text-muted-foreground">Total events</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Available Events</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {availableEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              showSignUp
              onSignUp={() => {
                setPledge({
                  ...pledge,
                  eventsSignedUp: [...pledge.eventsSignedUp, event]
                })
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

