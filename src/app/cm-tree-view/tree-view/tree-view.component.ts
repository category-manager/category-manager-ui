import { Component, ElementRef, ViewChild } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import * as d3 from 'd3';
import { CategoriesService } from 'src/app/categories.service';
import { CategoryResponse } from 'src/app/models/category-response';
// ParamMap lets you access path-variables, query-params
// ActivatedRoute gives you access to data
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  providers: [CategoriesService]
})
export class TreeViewComponent {
  @ViewChild("ancestor", {static: true})
  ancestorSvg!: ElementRef;

  @ViewChild("descendant", {static: true})
  descendantSvg!: ElementRef;
  
  ancestorHierarchicalData: CategoryResponse = new CategoryResponse();
  descendantHierarchicalData: CategoryResponse = new CategoryResponse();

  showModal: boolean = false;
  viewNumber: number = 2; // CREATE: 0, DELETE: 1, UPDATE: 2
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoriesService
  ) { }
  
  ngOnInit() {
    var categoryId = this.route.snapshot.paramMap.get("id");
    var data = this.route.snapshot.data;
    this.categoryService.getCategoryHierarchyById(categoryId, false)
      .then(observeable => observeable.subscribe(res => {
        this.ancestorHierarchicalData = res;
        this.renderTree(this.ancestorHierarchicalData, false, this.ancestorSvg);
      }));
      
    this.categoryService.getCategoryHierarchyById(categoryId, true)
    .then(observeable => observeable.subscribe(res => {
      this.descendantHierarchicalData = res;
      this.renderTree(this.descendantHierarchicalData, true, this.descendantSvg);
    }));
      
  }

  // BELOW FUNCTION CAPTURES EVENT FROM 'MODAL-POPUP' CHILD-COMPONENT.
  setModalView(showModal: boolean) {
    this.showModal = showModal;
  }

  renderTree(hierarchyData: CategoryResponse, isDescendant: boolean, svg: ElementRef): any {

    var vh = window.screen.height;
    var vw = window.screen.width;
    var height = vh * 0.7;
    var width = vw * 0.79;
    var marginLeft = window.screen.width * 0.1;
    var marginRight = window.screen.width * 0.1;
    var marginBottom = window.screen.height * 0.05;
    var treeSizeX = width / 4;  // THIS INCREASES THE TREE WIDTH. 
    var treeSizeY = height ; // THIS INCREASES THE PATH LENGTH
    // calculations
    const hierarchy = d3.hierarchy(hierarchyData);
    const tree = d3.cluster<CategoryResponse>().size([treeSizeX, treeSizeY]);
    const rootNode = tree(hierarchy);
    const links = rootNode.links();
    const descendants = rootNode.descendants();

    const linkGenerator = d3.linkHorizontal()
            .x( (d:any) => d.y -2)
            .y((d: any) => d.x);

    // console.log(links, descendants);

    const ancestorSvg = d3.select(svg.nativeElement)
              .attr('height', `${height - marginBottom *2}`)
              .attr('width', `${width}`)
              .style('background-color', 'aliceblue');
    const g = ancestorSvg.append('g')
                .attr('transform', `translate(${treeSizeX/10} ${treeSizeY/6})`);
                // .attr('transform', `translate(${treeSizeX} ${treeSizeY/4})`);


    // draw nodes
    const nodes: d3.Selection<SVGCircleElement, d3.HierarchyPointNode<CategoryResponse>, SVGGElement, unknown> = 
      g.selectAll('circle').data(descendants).enter().append('circle');
    this.renderNodes(nodes, descendants);
    // draw paths
    const paths: d3.Selection<SVGPathElement, d3.HierarchyPointLink<CategoryResponse>, SVGGElement, unknown> = 
      g.selectAll('path').data(links).enter().append('path');
    this.renderPaths(paths, links, linkGenerator);
    // draw texts
    const texts = g.selectAll('text').data(descendants).enter().append('text');
    this.renderTexts(texts, descendants);
  }

  renderNodes(circles: d3.Selection<SVGCircleElement, d3.HierarchyPointNode<CategoryResponse>, SVGGElement, unknown>, 
    data: d3.HierarchyPointNode<CategoryResponse>[]) {
      console.log(data);
      
      circles.attr('cx', (d: any) => d.y)
          .attr('cy', (d:any) => d.x)
          .attr('r', 5)
          .attr('fill', 'red')
        ;
  }

  renderPaths(paths: d3.Selection<SVGPathElement, d3.HierarchyPointLink<CategoryResponse>, SVGGElement, unknown>, 
    data: any,
    linkGenerator: any) {
    
      paths.attr('d', linkGenerator)
          .attr('stroke', 'steelblue')
          .attr('stroke-width', 2)
          .attr('fill', 'none');
  }
  renderTexts(texts: d3.Selection<SVGTextElement, d3.HierarchyPointNode<CategoryResponse>, SVGGElement, unknown>, 
    descendants: d3.HierarchyPointNode<CategoryResponse>[]) {
      texts.attr('x', d => d.y)
          .attr('y', d => d.x)
          .attr('fill', 'black')
          .attr('font-size', 'x-small')
        .text(d => d.data.id)
        .on('click', (event, d) => {
          console.log(event, d);
          this.id = d.data.id;
          this.setModalView(true);
          
        })
        .attr('cursor', 'pointer')
          ;
        ;
  }

}

