//train
import flightImg from "../assets/vehicles/flight.webp";
import airindiaImg from "../assets/vehicles/air-india.avif";
import spicejetImg from "../assets/vehicles/spicejet.jpg";
import vistaraImg from "../assets/vehicles/vistara.jpg";
import gofirst from "../assets/vehicles/go-first.jpg";
import airasiaImg from "../assets/vehicles/airasia.jpg";
import emiratesImg from "../assets/vehicles/emirates.avif";
import allianceImg from "../assets/vehicles/alliance-air.avif";
import lufthansaImg from "../assets/vehicles/lufthansa.webp";
//car
import triberImg from "../assets/vehicles/triber.jpg";
import marutidzireImg from "../assets/vehicles/marutidzire.jpg";
import innovaImg from "../assets/vehicles/innova.webp";
import hondaImg from "../assets/vehicles/honda-city.webp";
import nexonImg from "../assets/vehicles/nexon.jpg";
import ecosportImg from "../assets/vehicles/ecosport.webp";
import hyundvernaImg from "../assets/vehicles/hyundai-verna.webp";
import mahindraImg from "../assets/vehicles/xuv300.jpg";
import kiaImg from "../assets/vehicles/kia.jpg";
//train
import durontoTrain from "../assets/vehicles/durontotrain.jpg";
import RajdhaniTrain from "../assets/vehicles/rajdhanitrain.webp";
import shatabdiTrain from "../assets/vehicles/shatabditrain.jpg";
import garibrathTrain from "../assets/vehicles/garibrath.jpg";
import janshatabdiTrain from "../assets/vehicles/janshatabdi.jpg";
import intercityTrain from "../assets/vehicles/intercitytrain.jpeg";
import doubleTrain from "../assets/vehicles/doubletrain.jpg";
import vandebharatTrain from "../assets/vehicles/vandebharattrain.jpg";
import tejasTrain from "../assets/vehicles/tejastrain.jpg";

//bus
import krishbusImg from "../assets/vehicles/krish-bus.avif";
import kpnImg from "../assets/vehicles/kpnTravel.jpg";
import srsImg from "../assets/vehicles/srsbus.jpeg";
import neetaImg from "../assets/vehicles/neetabus.jpeg";
import sreeImg from "../assets/vehicles/sreebus.webp";
import praveenImg from "../assets/vehicles/praveenbus.png";
import lionImg from "../assets/vehicles/lionbus.avif";
import nationalImg from "../assets/vehicles/nationalbus.png";
import a1busImg from "../assets/vehicles/a1bus.webp";

export const flightData = [
  {
    brand: "Indigo",
    img: flightImg,
    price: 5000,
    type: "flight",
  },
  {
    brand: "Air India ",
    img: airindiaImg,
    price: 7900,
    type: "flight",
  },
  {
    brand: " SpiceJet  ",
    img: spicejetImg,
    price: 9000,
    type: "flight",
  },
  {
    brand: " Vistara",
    img: vistaraImg,
    price: 8000,
    type: "flight",
  },
  {
    brand: "Go First  ",
    img: gofirst,
    price: 4000,
    type: "flight",
  },
  {
    brand: "Emirates  ",
    img: emiratesImg,
    price: 5385,
    type: "flight",
  },
  {
    brand: "AirAsia  ",
    img: airasiaImg,
    price: 7348,
    type: "flight",
  },
  {
    brand: "Alliance Air  ",
    img: allianceImg,
    price: 2890,
    type: "flight",
  },
  {
    brand: "Lufthansa  ",
    img: lufthansaImg,
    price: 4635,
    type: "flight",
  },
];

export const trainData = [
  {
    brand: "Duronto Express",
    img: durontoTrain,
    price: 600,
    type: "train",
  },
  {
    brand: "Shatabdi Express",
    img: shatabdiTrain,
    price: 750,
    type: "train",
  },
  {
    brand: "Rajdhani Express",
    img: RajdhaniTrain,
    price: 425,
    type: "train",
  },
  {
    brand: "Garib Rath",
    img: garibrathTrain,
    price: 560,
    type: "train",
  },
  {
    brand: "Intercity Express   ",
    img: intercityTrain,
    price: 800,
    type: "train",
  },
  {
    brand: "Jan Shatabdi",
    img: janshatabdiTrain,
    price: 278,
    type: "train",
  },
  {
    brand: "Tejas Express",
    img: tejasTrain,
    price: 599,
    type: "train",
  },
  {
    brand: "Vande Bharat Express   ",
    img: vandebharatTrain,
    price: 1200,
    type: "train",
  },
  {
    brand: "Double Decker   ",
    img: doubleTrain,
    price: 2000,
    type: "train",
  },
];

export const busData = [
  {
    brand: "Krish Travels  ",
    img: krishbusImg,
    price: 489,
    type: "bus",
  },
  {
    brand: "KPN Travels   ",
    img: kpnImg,
    price: 630,
    type: "bus",
  },
  {
    brand: "SRS Travels   ",
    img: srsImg,
    price: 369,
    type: "bus",
  },
  {
    brand: "Neeta Travels   ",
    img: neetaImg,
    price: 799,
    type: "bus",
  },
  {
    brand: "Sree Travels   ",
    img: sreeImg,
    price: 600,
    type: "bus",
  },
  {
    brand: "Parveen Travels   ",
    img: praveenImg,
    price: 980,
    type: "bus",
  },
  {
    brand: "Lion Travels   ",
    img: lionImg,
    price: 734,
    type: "bus",
  },
  {
    brand: "National Travels   ",
    img: nationalImg,
    price: 2000,
    type: "bus",
  },
  {
    brand: "A1 Travels   ",
    img: a1busImg,
    price: 1300,
    type: "bus",
  },
];

export const carData = [
  {
    brand: "Renault Triber  ",
    img: triberImg,
    price: 600,
    type: "car",
  },
  {
    brand: "Maruti Dzire   ",
    img: marutidzireImg,
    price: 560,
    type: "car",
  },
  {
    brand: " Toyota Innova  ",
    img: innovaImg,
    price: 930,
    type: "car",
  },
  {
    brand: " Honda City  ",
    img: hondaImg,
    price: 1000,
    type: "car",
  },
  {
    brand: " Tata Nexon  ",
    img: nexonImg,
    price: 3700,
    type: "car",
  },
  {
    brand: " Ford EcoSport  ",
    img: ecosportImg,
    price: 245,
    type: "car",
  },
  {
    brand: " Hyundai Verna ",
    img: hyundvernaImg,
    price: 753,
    type: "car",
  },
  {
    brand: " Mahindra XUV300   ",
    img: mahindraImg,
    price: 903,
    type: "car",
  },
  {
    brand: " Kia Seltos  ",
    img: kiaImg,
    price: 7834,
    type: "car",
  },
];
