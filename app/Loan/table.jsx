import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className='bg-[#007CFF]/70 dark:bg-slate-900'>
            <TableCell className='text-black/80 font-bold font-sans  text-lg dark:text-white/70'>Monthly</TableCell>
            <TableCell className='text-black/80 font-bold font-sans  text-lg dark:text-white/70'>Principle</TableCell>
            <TableCell className='text-black/80 font-bold font-sans  text-lg dark:text-white/70'>Interest</TableCell>
          </TableRow>
        </TableHead>

          <TableBody className='dark:bg-zinc-900'>
            <TableRow>
              <TableCell className='text-black/80 text-lg dark:text-white/70'>8457</TableCell>
              <TableCell className='text-black/80 text-lg dark:text-white/70'>5123</TableCell>
              <TableCell className='text-black/80 text-lg dark:text-white/70'>3214</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='text-black/80 text-lg dark:text-white/70'>8457</TableCell>
              <TableCell className='text-black/80 text-lg dark:text-white/70'>5123</TableCell>
              <TableCell className='text-black/80 text-lg dark:text-white/70'>3214</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='text-black/80 text-lg dark:text-white/70'>8457</TableCell>
              <TableCell className='text-black/80 text-lg dark:text-white/70'>5123</TableCell>
              <TableCell className='text-black/80 text-lg dark:text-white/70'>3214</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}