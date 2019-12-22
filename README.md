# [Distributions](https://fion-p.github.io/Distributions/)

![full](https://i.pinimg.com/originals/94/8c/bd/948cbd7c0c068feafee44aedccfab86f.gif)

## Background
Distributions is an interactive data visualization based off of Hans Rosling's TED talk on the correlation between income and lifespan. The dataset is parsed from gapminder and is used to create this visualization where users are allowed to change the countries, change the regions, and change the years. The bubbles represent each country, with the size determined by the population for that year and the color determined by the country's region.

## Technologies Used
  * D3.js to create the visuals
  * Vanilla javascript to create dynamic features
  * HTML5 to display the visuals
  * CSS3 to style the contents
 
## Feature Highlights

### D3 Tips and Date Slider
<!-- ![drags](https://i.pinimg.com/originals/ba/a0/a9/baa0a9f9520475e3fef4b3d30d1bf001.gif) -->
![tips](d3tip2.png)
  * D3 tips are used so that users can see the information.
  * The tips are shown when the mouse hovers over the bubble.
  * Tips don't appear unless the mouse is on the bubble so that the data does not get congested.
  
### Displaying Data by Year
```javascript
   const circles = g.selectAll("circle")
    .data(data, d => {
      return d.country;
    });

  circles.exit().remove();

  circles.enter()
    .append("circle")
      .on("mouseover", tip.show)
      .on("mouseout", tip.hide)
      .merge(circles)
      .transition(t)
        .attr("fill", (d) => { return continentColor(d.continent); })
        .attr("cy", d => { return y(d.life_exp); })
        .attr("cx", d => { return x(d.income); })
        .attr("r", d => {
          return Math.sqrt(area(d.population) / Math.PI);
        })
        .attr("stroke", (d) => { return labelColor(d.continent); })
        .attr("stroke-width", "1px")
        .attr("opacity", "0.8");
```
 * D3's enter, update, and exit functions are used to cotinuously update the data so that it changes by year
 * Uses the merge method to combine enter and update attributes 
 * Utilizes transition after the merge to allow for smooth visuals as the data changes.

### Selectors and Checkboxes

![selects](https://i.pinimg.com/originals/67/75/3b/67753b3cf7a5d4f6f052bf9fc9814258.gif)

  * Selectors are used to let users change the region displayed. 
  * The bubbles are switched on change and can be changed while playing and while not playing. 
  * Checkboxes allow users to specify which countries to look at. 
  * The bubbles are filtered on click and upon check labels are appended to the graph. 


### Date Slider 

  ```javascript
    let rangeslider = document.getElementById("sliderRange");
    let output = document.getElementById("demo");

    output.innerHTML = rangeslider.value;

    export const sliderListener = data => {

    rangeslider.addEventListener('input', () => {
        clearInterval(interval);
        playButton.textContent = "Play";
        output.innerHTML = rangeslider.value;
        i = rangeslider.value - 1800;
        update(data[i], i);
      });
      
      rangeslider.addEventListener('click', () => {
        clearInterval(interval);
        playButton.textContent = "Play";
        update(data[i], i);
      });
    };
  ```
  * A slider is use to allow users to go to unique years in the visualization. 
  * The first event listener is used so that the the data changes when the user drags slider
  * The second event listener is used so that the visual stops playing once the user clicks on the bar.

