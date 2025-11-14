export async function getProducts() {
    const res = await fetch(`http://localhost:3000/api/products`, {
      cache: 'no-store', // or 'force-cache' if it's static
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
  
    return res.json();
  }
  