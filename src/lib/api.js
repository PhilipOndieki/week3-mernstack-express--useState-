const API = import.meta.env.VITE_API_URL;

// start of crud operations
// READ ()
export async function fetchStudents(){
    const res=await fetch(`${API}/students`);
    if(!res.ok)throw new Error('Failed to fetch');
    return res.json();
}

// create (post)
export async function createStudent(data){
    const res=await fetch(`${API}/students`, {
        method: 'POST', headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)});
    return res.json();
}

// update (put)
export async function updateStudent(id, data){
    const res = await fetch(`${API}/students/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return res.json();
}

// delete (delete)
export async function deleteStudent(id){
    await fetch(`${API}/students/${id}`, {method:'DELETE'})
} 