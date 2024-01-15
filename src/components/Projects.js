import {BsArrowRightCircleFill, BsArrowLeftCircleFill} from 'react-icons/bs'
import { useState } from 'react'
import { useHover } from "@uidotdev/usehooks";
import './css/Projects.css'
import chess from '../projectImages/chess.jpg'
import sudoku from '../projectImages/sudoku.jpg'
import ticket from '../projectImages/ticket.jpg'
import pawn from "../projectImages/pawn.png"
import vortex from "../projectImages/vortex.png"
import sudokuS from "../projectImages/sudokus.png"
import note from "../projectImages/journal.png"
import tree from "../projectImages/tree.png"
import art from "../projectImages/art.jpg"


const Projects = () => {
  const [ref, hovering] = useHover();

  const [slide, setSlide] = useState(0)
  const data = [{name : 'Chess', description : 'A two player chess game made in React', demo : "https://nolan-chess.vercel.app/", source : "https://github.com/NolanS55/React-Chess", src : chess}, 
  {name : 'TicketVortex', description : 'A website made for selling and buying tickets to concerts', demo : "https://github.com/agam-singh-talwar/Ticket-Vortex", source : "https://github.com/agam-singh-talwar/Ticket-Vortex", src : ticket},
  {name : 'Sudoku', description : 'Sudoku solver and game made in React', demo : "https://react-sudoku-pi.vercel.app/", source : "https://github.com/NolanS55/ReactSudoku", src : sudoku}]

  const projects = [{name : 'chess', summary : 'A two player chess game made in React', description : "A fully working chess game playable in the browser between two people. This was made all in React. It features all the rules of chess like, en passant, checking, mating and castling. I plan to add clocks and custom game settings later in the year.", source : "https://github.com/NolanS55/React-Chess", src : pawn},
{name : "TicketVortex", summary : "A website made for selling and buying tickets to concerts using Flask", description : "This website was made in a group and I was responsible for coding CRUD operations and connecting the app with a database, as well as database structure. We used Mongodb paired with Flask in order to allow users to buy tickets to concerts and sell their tickets.", source : "https://github.com/agam-singh-talwar/Ticket-Vortex", src : vortex},
{name : "Sudoku", summary : 'A website for playing and solving sudoku puzzles', description : "This app was made in react and allows people to play sudoku puzzles. It has a algorithm for solving them that I coded as well as being able to play the game itself.", source : "https://github.com/NolanS55/ReactSudoku", src : sudokuS},
{name : "AWS Jotting App", summary : 'An app for jotting made with parcel and AWS', description : "An app made with AWS and Parcel allowing users to save images and text to their account and access it at anytime. The app uses AWS for logging in and signing users up, authenticating users and storing their fragments.", source : "https://github.com/NolanS55/fragments", src : note},
{name : "MinMax Game Tree", summary : "Simple game tree made in python for playing basic python game", description : "A game tree that picks the best move in a game where the goal is to take as much space on a board as possible. I am hoping to take what I learned from coding this and make it into a chess engine soon.", source : "https://github.com/NolanS55/gameTree", src : tree},
{name : "Art Viewing Site", summary : "Website for viewing art from an api", description : "A website I made that takes art from a public API and displays it to the users. Users can login and then search art, favourite art and view what pieces they have looked at previously.", source : "https://github.com/NolanS55/artSite", src : art}]

  const slideChange = (num) => {
    setSlide(num)
    return 0
  }

  const nextSlide = () => {
    if(slide + 1 > 2) {
        setSlide(0)
    }
    else {
        setSlide(slide + 1)
    }
    
  }

  const prevSlide = () => {
    if(slide - 1 < 0) {
        setSlide(2)
    }
    else {
        setSlide(slide - 1)
    }
    
  }

  return (
    <div className="project">
        <div className='carousel'>
            <BsArrowLeftCircleFill className='arrow arrowLeft' onClick={prevSlide}></BsArrowLeftCircleFill>
            {data.map((item,index) => {
                return (
                    <div className={slide === index ? "item" : "item item-hidden"} style={{backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(${item.src})`}} key={index}>
                        <div className='text'>
                            <h1 className='title'>{item.name}</h1>
                            <h1 className='desc'>{item.description}</h1>
                            <h1 className='desc' style={{color : "orange"}}><a href={item.demo} target="_blank" rel="noreferrer">Demo the code</a>&nbsp; &nbsp;<a href={item.source} target="_blank" rel="noreferrer">View the code</a> </h1>
                        </div>
                    </div>
                )
            })}
            <BsArrowRightCircleFill className='arrow arrowRight' onClick={nextSlide}></BsArrowRightCircleFill>
            <span className='indicators'>
            {data.map((_, index) => {
                return <button key={index} onClick={() => (slideChange(index))} className={slide === index ? "indicator" : "indicator indicatorInactive"}></button>
            })}
            </span> 
        </div>
        <h1 className='titleProj'>All my projects</h1>
        <div className='projects'>
            {projects.map((item, index) => {
                if(hovering) {
                    return <div className='view' key={index} ref={ref}>hi</div>
                }
                else {
                    return (
                        <div className='view' key={index} ref={ref}>
                            <div className='projImg' style={{backgroundImage : `url(${item.src})`}}></div>
                            <h1 className='projName'>{item.name}</h1>
                            <hr></hr>
                            <h3 className='projSum'>{item.summary}</h3>
                            <div className='divLink'><a href={item.source} className='projLink'>view code</a></div>
                        </div>
                    )
                }
            })}
        </div>
    </div>
  );
}
 
export default Projects;