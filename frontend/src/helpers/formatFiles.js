const formatFiles = (files) => {
    
    if(files.length <= 0) {
        return []
    }

    const filesWithChildrens = files.map(parent => {
        const childs = files.filter(file => file.parentId === parent.id)
        parent.children = [...childs]
        return parent
    })
    const parentFiles = filesWithChildrens.filter(file => file.parentId === null)
   return parentFiles
}

export default formatFiles