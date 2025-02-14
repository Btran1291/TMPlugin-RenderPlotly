function render_plotly_chart(params) {
    const { htmlSource, canvasHeight } = params;

    const htmlString = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Plotly Chart</title>
        <script src="https://cdn.plot.ly/plotly-2.35.2.min.js" charset="utf-8"></script>
    </head>
    <body>
        <div id="plot-container" style="width: 100%;">
          ${htmlSource}
        </div>
        <script>
          try {
            const plotDiv = document.getElementById('plot-container').querySelector('div');
            if (plotDiv) {
              Plotly.newPlot(plotDiv, plotDiv.data, plotDiv.layout, {
                responsive: true,
                displayModeBar: true,
                displaylogo: false
              });
            }
          } catch (error) {
            console.error("Error rendering chart:", error);
            document.getElementById('plot-container').innerHTML = "<p>Error rendering chart: " + error.message + ". Please check your input data.</p>";
          }
        </script>
    </body>
    </html>
    `;

    return htmlString;
}
