


const DashboardTable = ({children}) => {
  return (

      <>
          <div className=' table-container mt-3 '>
              <div className='p-3 wdith100 cardboxborder' style={{overflowX:'auto'}}>
                  <table className="table is-bordered wdith100 ">
                      <thead className='clrtwo'>
                      <tr className='pinar  '>
                          <th className='clrsixtext has-text-centered'> کد رهگیری</th>
                          <th className='clrsixtext has-text-centered'>برنامه</th>
                          <th className='clrsixtext has-text-centered'>بلیط</th>
                          <th className='clrsixtext has-text-centered'>مبلغ کل</th>
                          <th className='clrsixtext has-text-centered'>تاریخ رزرو</th>
                          <th className='clrsixtext has-text-centered'>دانلود</th>
                      </tr>
                      </thead>
                      <tbody className='yekan has-text-centered'>
                      {children}
                      </tbody>
                  </table>
              </div>


          </div>


      </>
  )
}
export default DashboardTable;