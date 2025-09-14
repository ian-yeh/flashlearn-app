export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const note_id = url.pathname.split('/').pop()

  const response = await fetch(`http://127.0.0.1:8000/notes/${note_id}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    return new Response(JSON.stringify({ error: 'Failed to delete note' }), {
      status: response.status,
      headers: { "Content-Type": "application/json" }
    });
  }

  const result = await response.json();
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" }
  });
}
