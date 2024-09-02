const card = new Set()

export function add(id){
    card.add(id);
    console.log(`U added item ${id}`);
};

export function remove(id){
    card.delete(id);
    console.log(`U removed item ${id}`);
};