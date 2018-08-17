export class FlowNodeRuntimeInformation {
  public processModelId: string;
  public flowNodeId: string;
  public arithmeticMeanRuntimeInMs: number;
  public firstQuartileRuntimeInMs: number;
  /* aka second quartile */
  public medianRuntimeInMs: number;
  public thirdQuartileRuntimeInMs: number;
  public minRuntimeInMs: number;
  public maxRuntimeInMs: number;
}
