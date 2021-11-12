# Object detection WEB APP

## 1. Introduction

This is a simple WEB APP in which a webcam will be opened and it will try to detect the objects displayed on the screen.

This WEB APP was developed using:

* ReactJS
* TensorflowJS

## 2. What's ReactJS ?

ReactJS is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. 

It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.

## 3. What's TensorflowJS ?

TensorFlowJS is a library for developing and training machine learning models in JavaScript, and deploying them in a browser or on Node. js. 

You can use existing models, convert Python TensorFlow models, use transfer learning to retrain existing models with your own data, and develop models from scratch.

## 4. Model used

In this WEB APP I used the **"coco-ssd"** pre-trained model. 

This model detects objects defined in the **COCO dataset**, which is a large-scale: 

* Object detection, 
* Segmentation
* Captioning dataset

The model is capable of detecting 80 classes of objects. (SSD stands for Single Shot MultiBox Detection).

## 5. How the WEB APP works ?

First, the user will be asked to pen his webcam. Then the model which will be loaded in the background will wait for the frames to be provided in order to classify them according to the **COCO dataset**. 

In the last step, the results of the classification will be provided to another function which will be responsible for drawing, for each detection, a **green** rectangle with the label above.

## 6. Demo

![WEB APP demo](./assets/app_demo.gif "WEB APP demo")

## 7. Run the WEB APP

1. Clone the repository
2. Run **npm i** inside the repository's folder, and wait for dependicies to be installed *(this may take w while)*
3. After the installation is completed, run **npm start** inside the repository's folder
4. ENJOY ! 😄

## 8. References

* [Youtube tutorial](https://www.youtube.com/watch?v=uTdUUpfA83s&t=476s&ab_channel=NicholasRenotte)

* [coco-ssd pre-trained model](https://www.youtube.com/watch?v=uTdUUpfA83s&t=476s&ab_channel=NicholasRenotte)

* [coco-ssd dataset](https://cocodataset.org/#home)