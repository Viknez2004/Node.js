import express from 'express';
import { delmovie, editmovie, moviebyid, movielistupdate, movieslist } from './controllermovies.js';


const router = express.Router();

router.get( "/list" , movieslist );

router.get( "/:movieid" , moviebyid  );

router.post( "/update" , movielistupdate );

router.get(  "/del/:id" , delmovie  );

router.post(  "/edit" , editmovie  );

export default router;


//   http://localhost:3000/api/tamilmovies/list

//   http://localhost:3000/api/tamilmovies/:movieid

//   http://localhost:3000/api/tamilmovies/update

//   http://localhost:3000/api/tamilmovies/del/:id