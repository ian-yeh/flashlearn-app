export async function GET() {
  const notes = await fetch('http://127.0.0.1:8000/notes/');
  const notesData = await notes.json();
  return new Response(JSON.stringify(notesData), {
    headers: { "Content-Type": "application/json" }
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const response = await fetch('http://127.0.0.1:8000/notes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const createdNote = await response.json();
    
    return new Response(JSON.stringify(createdNote), {
      headers: { "Content-Type": "application/json" },
      status: 201
    });
    
  } catch (error) {
    console.error('Error creating note:', error);
    return new Response(JSON.stringify({ error: 'Failed to create note' }), {
      headers: { "Content-Type": "application/json" },
      status: 500
    });
  }
}
