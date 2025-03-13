"use client"
import { Button } from "@/components/ui/button"
import { AlertCircle, RefreshCw } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorDisplay onReset={() => this.setState({ hasError: false })} />
    }

    return this.props.children
  }
}

function ErrorDisplay({ onReset }: { onReset: () => void }) {

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2 text-destructive">
          <AlertCircle className="w-5 h-5" />
          <CardTitle>Error Occurred</CardTitle>
        </div>
        <CardDescription>We couldn&apos;t load the exchange rates data</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          There was a problem fetching the latest cryptocurrency exchange rates. This could be due to network issues or
          the API being temporarily unavailable.
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={onReset} className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Try Again
        </Button>
      </CardFooter>
    </Card>
  )
}

