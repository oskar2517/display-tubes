---
date: 2024-11-16
lastmod: 2026-10-11
title: OmniRay SAO M 40
categories:
    - other
tags:
    - OmniRay
---

The SAO M 40 is a so-called Sphericular Optic Display sold by OmniRay. Although similar in both appearance and application to projection displays such as the one-plane readouts sold by IEE, the underlying theory of operation is vastly differemnt.

A projection display contains a matrix of small light bulbs that can be turned on and off individually, with each bulb responsible for producing a specific character, usually a digit, on the readout screen. A character is thus selected by turning on its respective light bulb, which shines through a mask with a cutout in the appropriate shape. The light is then deflected by a specially shaped lens assembly, focused, and projected onto the back of the diffusion screen, creating a character visible from the front.

A sphericular display contains the same matrix of light bulbs, but there is no mask to direct the light into the shape of characters. Instead, the screen area is divided into more than a thousand tiny convex lenses, each of which focuses incoming light onto a point on its focal plane determined by the angle at which the light strikes the lens. The focal plane of each of these lenses can be thought of as being further divided into the same number of spots as there are light bulbs in the device. This is the case since the bulbs are arranged so that the incoming light from each one hits the lenses at a slightly different angle, causing the refracted light to converge at a slightly different spot on the focal plane of each lens. 

In front of the lens plate lies a piece of photographic film, which has been exposed with the dot pattern necessary to produce all supported characters. Each lens corresponds to a specific area on this film, which may contain multiple of these transparent dots through which light can pass. Depending on the angle at which light strikes the lens behind a particular area of the film, it is focused onto a specific point on the film within that area. Depending on whether or not this spot contains a dot, the light is either absorbed by the film or allowed to pass through, where it hits a diffusion layer, producing a dot visible from the front of the device. Each character is made up of a combination of many of these dots. To change the set of supported characters, only this film needs to be replaced.

A more comprehensive explanation of the operational theory behind this device is linked below.

The device's PCB backplate is designed to be removable, allowing easy access to the 11 socketed miniature light bulbs inside. The installed light bulbs, as indicated on the device's metal housing, are rated for 14 volts. OmniRay also sold at least one related model, the SD 12 W, which was rated for 28 volts. One of the pictures below also shows a version of the M 40 with a different, more modern PCB design.

As far as I am aware, the concept of the sphericular display was developed by Burroughs, likely as a direct competitor to IEE's patented projection displays. This is further supported by the fact that sphericular displays are driven in the same way as projection displays, which would have made replacing the latter in an existing design very easy.

| Property          | Description    |
|-------------------|----------------|
| Manufacturer      | OmniRay        |
| Time period       | ?              |
| Digit height      | 15mm           |

### References

- [YouTube video by Fran Blanche](https://youtu.be/6LR1g9atxoI)

- [tube-tester.com on the SD 12 W](https://www.tube-tester.com/sites/nixie/data/SD12W/SD12W-28V.htm) ([Archive](https://web.archive.org/web/20240424052210/https://www.tube-tester.com/sites/nixie/data/SD12W/SD12W-28V.htm))

- [industrialalchemy.org on an IEE projection display](https://www.industrialalchemy.org/articleview.php?item=511) ([Archive](https://web.archive.org/web/20240914033648/https://www.industrialalchemy.org/articleview.php?item=511))

[![OmniRay SAO M 40](assets/1.jpg)](assets/1.jpg)

[![OmniRay SAO M 40](assets/2.jpg)](assets/2.jpg)

[![OmniRay SAO M 40](assets/3.jpg)](assets/3.jpg)

[![OmniRay SAO M 40](assets/4.jpg)](assets/4.jpg)

[![OmniRay SAO M 40](assets/5.jpg)](assets/5.jpg)

[![OmniRay SAO M 40](assets/18.jpg)](assets/18.jpg)

[![OmniRay SAO M 40](assets/6.jpg)](assets/6.jpg)

[![OmniRay SAO M 40](assets/7.jpg)](assets/7.jpg)

<table>
    <tr>
        <td>
            <a href="assets/8.jpg">
                <img src="assets/8.jpg">
            </a>
        </td>
        <td>
            <a href="assets/9.jpg">
                <img src="assets/9.jpg">
            </a>
        </td>
        <td>
            <a href="assets/10.jpg">
                <img src="assets/10.jpg">
            </a>
        </td>
         <td>
            <a href="assets/11.jpg">
                <img src="assets/11.jpg">
            </a>
        </td>
        <td>
            <a href="assets/12.jpg">
                <img src="assets/12.jpg">
            </a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="assets/13.jpg">
                <img src="assets/13.jpg">
            </a>
        </td>
        <td>
            <a href="assets/14.jpg">
                <img src="assets/14.jpg">
            </a>
        </td>
        <td>
            <a href="assets/15.jpg">
                <img src="assets/15.jpg">
            </a>
        </td>
         <td>
            <a href="assets/16.jpg">
                <img src="assets/16.jpg">
            </a>
        </td>
        <td>
            <a href="assets/17.jpg">
                <img src="assets/17.jpg">
            </a>
        </td>
    </tr>
</table>
