export const listNotes = (notes) => {
  notes.forEach(({ id, content, tags }) => {
    console.log('id: ', id)
    console.log('tags: ', tags.join(', ')),
    console.log('note: ', content)
    console.log('\n')
  })
}
