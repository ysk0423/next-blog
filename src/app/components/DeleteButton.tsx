type DeleteButtonProps = {
  id: string,
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  return (
    <div className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer">削除</div>
  )
}

export default DeleteButton