// import { PrismaClient } from '@prisma/client';
// import DepartmentDelete from '../shared_delete/departmentDelete';



// const prisma = new PrismaClient();

// async function getDepartmentData(){

//     const departmentData = await prisma.departments.findMany({
//         select:{
//             id: true,
//             dept_name: true,
//             status: true
//         },
//         orderBy: {
//             id: 'asc'
//         }
//     })
  
//     return departmentData;
// }

// const departmentTable = async () => {
//     const departmentData = await getDepartmentData()
//     return (
//         <table className="flex flex-col gap-5 items-center justify-center mt-10 w-full table-auto">
//             <tbody>
//             {departmentData.map((departments, id) => (
//                 <tr key={id}>
//                     <td className= "px-5 py-5"> {departments.id} </td>
//                     <td className= "px-5 py-5"> {departments.dept_name} </td>
//                     <td className= "px-5 py-5"> {departments.status} </td>
//                     <td>
//                         <div className="flex items-center gap-5">
//                            <DepartmentDelete id={departments.id}/>
//                         </div>
//                     </td>
//                 </tr>
//             ))}
//             </tbody>
//         </table>
//     )
// }

// export default departmentTable
