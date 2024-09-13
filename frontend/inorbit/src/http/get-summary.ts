type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

const backend_url = import.meta.env.VITE_BASE_URL;

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch(`${backend_url}/summary`);
  const data = await response.json();
  
  return data.summary
}