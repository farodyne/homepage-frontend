# Introduction

This Vue 3 project implements the simple frontend module for the [Farodyne](https://www.farodyne.com) homepage.

As the webpage is heavily centered around one of my main hobbies, photography and digital editining, the aim of the page is to present a selection of my results in a well-structured manner. For this reason, images and videos are logically grouped together in material I have captured either during my trips, in my home studio or sketeched together on my Wacom tablet.

By reflecting this grouping as different album sections on my webpage, I can easily fetch the required information for each album from the backend module over a simple REST API.

All the microservices that constitute the infrastructure for my homepage solution, including this frontend module, are
packaged into Docker images. These images are built automatically by GitHub actions workflows. As such, the maintainance and deployment of the combined, distributed application becomes a fairly streamlined pipeline.
