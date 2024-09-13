type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

const backend_url = import.meta.env.VITE_BASE_URL;

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch(`${backend_url}/pending-goals`)
  const data = await response.json()

  return data.pendingGoals
}