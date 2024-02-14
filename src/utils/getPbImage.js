export default function getPbImage({ collectionId, id, photo }) {
  return `${
    import.meta.env.VITE_PB_API
  }/api/files/${collectionId}/${id}/${photo}`;
}
