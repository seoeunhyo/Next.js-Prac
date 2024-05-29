

export default function InvoicesInformation({ params, searchParams }) {
    
    const { information } = params
    console.log(information)
    const [type, detail] = information
    return (
      <main className='flex min-h-screen flex-col items-center p-24'>
        어떤 계약에 대한 내용을 볼까요?
       <div>타입은 {type}과 같고,</div>
        <div>상세내용은 {detail}과 같습니다</div> 
      </main>
    )
  }