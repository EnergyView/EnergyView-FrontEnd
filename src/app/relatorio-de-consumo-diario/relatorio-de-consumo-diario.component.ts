import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../services/ApiService';

@Component({
  selector: 'app-relatorio-de-consumo-diario',
  templateUrl: './relatorio-de-consumo-diario.component.html',
  styleUrls: ['./relatorio-de-consumo-diario.component.css']
})
export class RelatorioDeConsumoDiarioComponent{
  //For the time being (while we dont implement the getChartsConsumoDiario properly) we're mocking the response
  response : any = {
    "curva-de-carga": "<html>\n<head><meta charset=\"utf-8\" /></head>\n<body>\n	<div>                    	<script type=\"text/javascript\">window.PlotlyConfig = {MathJaxConfig: 'local'};</script>\n    	<script src=\"https://cdn.plot.ly/plotly-2.18.2.min.js\"></script>            	<div id=\"e23e725c-f976-4847-939e-278dd3296884\" class=\"plotly-graph-div\" style=\"height:100%; width:100%;\"></div>        	<script type=\"text/javascript\">                                	window.PLOTLYENV=window.PLOTLYENV || {};                                	if (document.getElementById(\"e23e725c-f976-4847-939e-278dd3296884\")) {                	Plotly.newPlot(                    	\"e23e725c-f976-4847-939e-278dd3296884\",                    	[{\"line\":{\"color\":\"#252525\",\"width\":4},\"mode\":\"lines\",\"showlegend\":false,\"x\":[\"2023-03-20T00:00:00.000004\",\"2023-03-20T00:15:00.000004\",\"2023-03-20T00:30:00\",\"2023-03-20T00:45:00\",\"2023-03-20T01:00:00\",\"2023-03-20T01:15:00\",\"2023-03-20T01:30:00\",\"2023-03-20T01:45:00\",\"2023-03-20T02:00:00\",\"2023-03-20T02:15:00\",\"2023-03-20T02:30:00\",\"2023-03-20T02:45:00\",\"2023-03-20T03:00:00\",\"2023-03-20T03:15:00.000005\",\"2023-03-20T03:30:00\",\"2023-03-20T03:45:00\",\"2023-03-20T04:00:00\",\"2023-03-20T04:15:00\",\"2023-03-20T04:30:00\",\"2023-03-20T04:45:00\",\"2023-03-20T05:00:00\",\"2023-03-20T05:15:00\",\"2023-03-20T05:30:00\",\"2023-03-20T05:45:00\",\"2023-03-20T06:00:00\",\"2023-03-20T06:15:00\",\"2023-03-20T06:30:00\",\"2023-03-20T06:45:00\",\"2023-03-20T07:00:00\",\"2023-03-20T07:15:00\",\"2023-03-20T07:30:00\",\"2023-03-20T07:45:00.000004\",\"2023-03-20T08:00:00\",\"2023-03-20T08:15:00\",\"2023-03-20T08:30:00\",\"2023-03-20T08:45:00\",\"2023-03-20T09:00:00\",\"2023-03-20T09:15:00\",\"2023-03-20T09:30:00\",\"2023-03-20T09:45:00\",\"2023-03-20T10:00:00.000004\",\"2023-03-20T10:15:00\",\"2023-03-20T10:30:00\",\"2023-03-20T10:45:00\",\"2023-03-20T11:00:00\",\"2023-03-20T11:15:00\",\"2023-03-20T11:30:00.000004\",\"2023-03-20T11:45:00\",\"2023-03-20T12:00:00\",\"2023-03-20T12:15:00\"],\"y\":[696.0,698.0,712.0,697.0,700.0,697.0,700.0,696.0,700.0,698.0,701.0,695.0,696.0,695.0,695.0,695.0,695.0,695.0,720.0,693.0,689.0,687.0,693.0,697.0,694.0,689.0,693.0,696.0,695.0,692.0,690.0,695.0,693.0,692.0,689.0,684.0,694.0,691.0,687.0,690.0,686.0,689.0,688.0,684.0,683.0,690.0,689.0,707.0,738.0,725.0],\"type\":\"scatter\"}],                    	{\"template\":{\"data\":{\"histogram2dcontour\":[{\"type\":\"histogram2dcontour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"choropleth\":[{\"type\":\"choropleth\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"histogram2d\":[{\"type\":\"histogram2d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmap\":[{\"type\":\"heatmap\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmapgl\":[{\"type\":\"heatmapgl\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"contourcarpet\":[{\"type\":\"contourcarpet\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"contour\":[{\"type\":\"contour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"surface\":[{\"type\":\"surface\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"mesh3d\":[{\"type\":\"mesh3d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"scatter\":[{\"fillpattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2},\"type\":\"scatter\"}],\"parcoords\":[{\"type\":\"parcoords\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolargl\":[{\"type\":\"scatterpolargl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"bar\":[{\"error_x\":{\"color\":\"#2a3f5f\"},\"error_y\":{\"color\":\"#2a3f5f\"},\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"bar\"}],\"scattergeo\":[{\"type\":\"scattergeo\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolar\":[{\"type\":\"scatterpolar\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"histogram\":[{\"marker\":{\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"histogram\"}],\"scattergl\":[{\"type\":\"scattergl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatter3d\":[{\"type\":\"scatter3d\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattermapbox\":[{\"type\":\"scattermapbox\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterternary\":[{\"type\":\"scatterternary\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattercarpet\":[{\"type\":\"scattercarpet\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"carpet\":[{\"aaxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"baxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"type\":\"carpet\"}],\"table\":[{\"cells\":{\"fill\":{\"color\":\"#EBF0F8\"},\"line\":{\"color\":\"white\"}},\"header\":{\"fill\":{\"color\":\"#C8D4E3\"},\"line\":{\"color\":\"white\"}},\"type\":\"table\"}],\"barpolar\":[{\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"barpolar\"}],\"pie\":[{\"automargin\":true,\"type\":\"pie\"}]},\"layout\":{\"autotypenumbers\":\"strict\",\"colorway\":[\"#636efa\",\"#EF553B\",\"#00cc96\",\"#ab63fa\",\"#FFA15A\",\"#19d3f3\",\"#FF6692\",\"#B6E880\",\"#FF97FF\",\"#FECB52\"],\"font\":{\"color\":\"#2a3f5f\"},\"hovermode\":\"closest\",\"hoverlabel\":{\"align\":\"left\"},\"paper_bgcolor\":\"white\",\"plot_bgcolor\":\"#E5ECF6\",\"polar\":{\"bgcolor\":\"#E5ECF6\",\"angularaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"radialaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"ternary\":{\"bgcolor\":\"#E5ECF6\",\"aaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"baxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"caxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"coloraxis\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"colorscale\":{\"sequential\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"sequentialminus\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"diverging\":[[0,\"#8e0152\"],[0.1,\"#c51b7d\"],[0.2,\"#de77ae\"],[0.3,\"#f1b6da\"],[0.4,\"#fde0ef\"],[0.5,\"#f7f7f7\"],[0.6,\"#e6f5d0\"],[0.7,\"#b8e186\"],[0.8,\"#7fbc41\"],[0.9,\"#4d9221\"],[1,\"#276419\"]]},\"xaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"yaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"scene\":{\"xaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"yaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"zaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2}},\"shapedefaults\":{\"line\":{\"color\":\"#2a3f5f\"}},\"annotationdefaults\":{\"arrowcolor\":\"#2a3f5f\",\"arrowhead\":0,\"arrowwidth\":1},\"geo\":{\"bgcolor\":\"white\",\"landcolor\":\"#E5ECF6\",\"subunitcolor\":\"white\",\"showland\":true,\"showlakes\":true,\"lakecolor\":\"white\"},\"title\":{\"x\":0.05},\"mapbox\":{\"style\":\"light\"}}},\"xaxis\":{\"tickfont\":{\"color\":\"#252525\",\"size\":15},\"showgrid\":false},\"yaxis\":{\"tickfont\":{\"color\":\"#252525\",\"size\":15},\"showgrid\":true,\"gridcolor\":\"#d4d4d4\"}},                    	{\"responsive\": true}                	)            	};                        	</script>    	</div>\n</body>\n</html>",
    "consumo-acumulado": "<html>\n<head><meta charset=\"utf-8\" /></head>\n<body>\n	<div>                    	<script type=\"text/javascript\">window.PlotlyConfig = {MathJaxConfig: 'local'};</script>\n    	<script src=\"https://cdn.plot.ly/plotly-2.18.2.min.js\"></script>            	<div id=\"f374c1f6-300f-413d-9133-c3454fb65292\" class=\"plotly-graph-div\" style=\"height:100%; width:100%;\"></div>        	<script type=\"text/javascript\">                                	window.PLOTLYENV=window.PLOTLYENV || {};                                	if (document.getElementById(\"f374c1f6-300f-413d-9133-c3454fb65292\")) {                	Plotly.newPlot(                    	\"f374c1f6-300f-413d-9133-c3454fb65292\",                    	[{\"line\":{\"color\":\"#252525\",\"width\":4},\"mode\":\"lines\",\"showlegend\":false,\"x\":[\"2023-03-20T00:00:00.000004\",\"2023-03-20T00:15:00.000004\",\"2023-03-20T00:30:00\",\"2023-03-20T00:45:00\",\"2023-03-20T01:00:00\",\"2023-03-20T01:15:00\",\"2023-03-20T01:30:00\",\"2023-03-20T01:45:00\",\"2023-03-20T02:00:00\",\"2023-03-20T02:15:00\",\"2023-03-20T02:30:00\",\"2023-03-20T02:45:00\",\"2023-03-20T03:00:00\",\"2023-03-20T03:15:00.000005\",\"2023-03-20T03:30:00\",\"2023-03-20T03:45:00\",\"2023-03-20T04:00:00\",\"2023-03-20T04:15:00\",\"2023-03-20T04:30:00\",\"2023-03-20T04:45:00\",\"2023-03-20T05:00:00\",\"2023-03-20T05:15:00\",\"2023-03-20T05:30:00\",\"2023-03-20T05:45:00\",\"2023-03-20T06:00:00\",\"2023-03-20T06:15:00\",\"2023-03-20T06:30:00\",\"2023-03-20T06:45:00\",\"2023-03-20T07:00:00\",\"2023-03-20T07:15:00\",\"2023-03-20T07:30:00\",\"2023-03-20T07:45:00.000004\",\"2023-03-20T08:00:00\",\"2023-03-20T08:15:00\",\"2023-03-20T08:30:00\",\"2023-03-20T08:45:00\",\"2023-03-20T09:00:00\",\"2023-03-20T09:15:00\",\"2023-03-20T09:30:00\",\"2023-03-20T09:45:00\",\"2023-03-20T10:00:00.000004\",\"2023-03-20T10:15:00\",\"2023-03-20T10:30:00\",\"2023-03-20T10:45:00\",\"2023-03-20T11:00:00\",\"2023-03-20T11:15:00\",\"2023-03-20T11:30:00.000004\",\"2023-03-20T11:45:00\",\"2023-03-20T12:00:00\",\"2023-03-20T12:15:00\"],\"y\":[0.0,133.0,266.0,399.0,532.0,665.0,798.0,931.0,1063.0,1197.0,1330.0,1463.0,1595.0,1729.0,1862.0,1996.0,2130.0,2267.0,2407.0,2544.0,2677.0,2810.0,2944.0,3077.0,3210.0,3343.0,3476.0,3609.0,3742.0,3875.0,4008.0,4141.0,4274.0,4407.0,4540.0,4673.0,4806.0,4943.0,5076.0,5209.0,5342.0,5476.0,5609.0,5742.0,5882.0,6015.0,6148.0,6284.0,6425.0,6488.0],\"type\":\"scatter\"}],                    	{\"template\":{\"data\":{\"histogram2dcontour\":[{\"type\":\"histogram2dcontour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"choropleth\":[{\"type\":\"choropleth\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"histogram2d\":[{\"type\":\"histogram2d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmap\":[{\"type\":\"heatmap\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmapgl\":[{\"type\":\"heatmapgl\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"contourcarpet\":[{\"type\":\"contourcarpet\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"contour\":[{\"type\":\"contour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"surface\":[{\"type\":\"surface\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"mesh3d\":[{\"type\":\"mesh3d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"scatter\":[{\"fillpattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2},\"type\":\"scatter\"}],\"parcoords\":[{\"type\":\"parcoords\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolargl\":[{\"type\":\"scatterpolargl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"bar\":[{\"error_x\":{\"color\":\"#2a3f5f\"},\"error_y\":{\"color\":\"#2a3f5f\"},\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"bar\"}],\"scattergeo\":[{\"type\":\"scattergeo\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolar\":[{\"type\":\"scatterpolar\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"histogram\":[{\"marker\":{\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"histogram\"}],\"scattergl\":[{\"type\":\"scattergl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatter3d\":[{\"type\":\"scatter3d\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattermapbox\":[{\"type\":\"scattermapbox\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterternary\":[{\"type\":\"scatterternary\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattercarpet\":[{\"type\":\"scattercarpet\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"carpet\":[{\"aaxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"baxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"type\":\"carpet\"}],\"table\":[{\"cells\":{\"fill\":{\"color\":\"#EBF0F8\"},\"line\":{\"color\":\"white\"}},\"header\":{\"fill\":{\"color\":\"#C8D4E3\"},\"line\":{\"color\":\"white\"}},\"type\":\"table\"}],\"barpolar\":[{\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"barpolar\"}],\"pie\":[{\"automargin\":true,\"type\":\"pie\"}]},\"layout\":{\"autotypenumbers\":\"strict\",\"colorway\":[\"#636efa\",\"#EF553B\",\"#00cc96\",\"#ab63fa\",\"#FFA15A\",\"#19d3f3\",\"#FF6692\",\"#B6E880\",\"#FF97FF\",\"#FECB52\"],\"font\":{\"color\":\"#2a3f5f\"},\"hovermode\":\"closest\",\"hoverlabel\":{\"align\":\"left\"},\"paper_bgcolor\":\"white\",\"plot_bgcolor\":\"#E5ECF6\",\"polar\":{\"bgcolor\":\"#E5ECF6\",\"angularaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"radialaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"ternary\":{\"bgcolor\":\"#E5ECF6\",\"aaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"baxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"caxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"coloraxis\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"colorscale\":{\"sequential\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"sequentialminus\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"diverging\":[[0,\"#8e0152\"],[0.1,\"#c51b7d\"],[0.2,\"#de77ae\"],[0.3,\"#f1b6da\"],[0.4,\"#fde0ef\"],[0.5,\"#f7f7f7\"],[0.6,\"#e6f5d0\"],[0.7,\"#b8e186\"],[0.8,\"#7fbc41\"],[0.9,\"#4d9221\"],[1,\"#276419\"]]},\"xaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"yaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"scene\":{\"xaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"yaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"zaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2}},\"shapedefaults\":{\"line\":{\"color\":\"#2a3f5f\"}},\"annotationdefaults\":{\"arrowcolor\":\"#2a3f5f\",\"arrowhead\":0,\"arrowwidth\":1},\"geo\":{\"bgcolor\":\"white\",\"landcolor\":\"#E5ECF6\",\"subunitcolor\":\"white\",\"showland\":true,\"showlakes\":true,\"lakecolor\":\"white\"},\"title\":{\"x\":0.05},\"mapbox\":{\"style\":\"light\"}}},\"xaxis\":{\"tickfont\":{\"color\":\"#252525\",\"size\":15},\"showgrid\":false},\"yaxis\":{\"tickfont\":{\"color\":\"#252525\",\"size\":15},\"showgrid\":true,\"gridcolor\":\"#d4d4d4\"}},                    	{\"responsive\": true}                	)            	};                        	</script>    	</div>\n</body>\n</html>",
    "demanda-maxima": 738.0,
    "demanda-media": 695.66,
    "horario-de-pico": [
        "2023-03-20T11:45:00",
        "2023-03-20T12:15:00"
    ],
    "consumo-total": 6488.0,
    "consumo-total-a": 1121.0,
    "consumo-total-b": 2270.0,
    "consumo-total-c": 3097.0
  };
  consumo_relativo_a : any;
  consumo_relativo_b : any;
  consumo_relativo_c : any;
  date = new FormControl(new Date());

  constructor(private apiClient : ApiService){}
  
  ngOnInit(){
    var day = this.date.getRawValue()!.getDate();
    var month = this.date.getRawValue()!.getMonth();
    month += 1;
    var year = this.date.getRawValue()!.getFullYear();
    if(day <= 9 && month <= 9){
      var dateString = year + "-" + "0" + month + "-" + "0" + day;
    }
    else if(day <= 9){
      var dateString = year + "-" + month + "-" + "0" + day;
    }
    else if(month <= 9){
      var dateString = year + "-" + "0" + month + "-" + day;
    }
    else{
      var dateString = year + "-" + month + "-" + day;
    }
    this.getData(dateString);
  }
  
  onDateChange(event: any): void {
    var day = event.getDate();
    var month = event.getMonth();
    month += 1;
    var year = event.getFullYear();
    if(day <= 9 && month <= 9){
      var dateString = year + "-" + "0" + month + "-" + "0" + day;
    }
    else if(day <= 9){
      var dateString = year + "-" + month + "-" + "0" + day;
    }
    else if(month <= 9){
      var dateString = year + "-" + "0" + month + "-" + day;
    }
    else{
      var dateString = year + "-" + month + "-" + day;
    }
    this.getData(dateString);
  }
    
  getData(dateString: string){
    let curva_carga = document.getElementById("chartCurvaCarga");
    let consumo_acumulado = document.getElementById("chartConsumoAcumuladoDiario");
    //For the time being (while we dont implement the getChartsConsumoDiario properly) we're mocking the response
    //this.response = this.apiClient.getResponse(dateString, "consumo");

    //I don't think we should be handling data in the front-end, this should probably be created in the back-end and returned in the response array
    this.consumo_relativo_a = (this.response['consumo-total-a'] / this.response['consumo-total'] * 100).toFixed(2)
    this.consumo_relativo_b = (this.response['consumo-total-b'] / this.response['consumo-total'] * 100).toFixed(2)
    this.consumo_relativo_c = (this.response['consumo-total-c'] / this.response['consumo-total'] * 100).toFixed(2)
    if(curva_carga && consumo_acumulado){
      curva_carga.innerHTML = this.response["curva-de-carga"]
      consumo_acumulado.innerHTML = this.response["consumo-acumulado"]
      let scriptTags = curva_carga.getElementsByTagName('script');
      for (let i = 0; i < scriptTags.length; i++) {
        eval(scriptTags[i].innerHTML);
      }
      scriptTags = consumo_acumulado.getElementsByTagName('script');
      for (let i = 0; i < scriptTags.length; i++) {
        eval(scriptTags[i].innerHTML);
      }
    }
  }
}