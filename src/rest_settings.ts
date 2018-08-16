// tslint:disable:typedef
const params = {
  processModelId: ':process_model_id',
  flowNodeId: ':flow_node_id',
};

const paths = {
  getAverageRuntimeForProcessModel: `/process_model/${params.processModelId}/average_runtime`,
  getAverageRuntimeForFlowNode: `/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/average_runtime`,
  getActiveTokensForProcessModel: `/process_model/${params.processModelId}/active_tokens`,
  getActiveTokensForFlowNode: `/flow_node/${params.flowNodeId}/active_tokens`,
};

/**
 * Contains the endpoints and various rest parameters used by the kpi api.
 */
export const restSettings = {
  /**
   * A collection of all url parameters employed by the kpi api.
   */
  params: params,
  /**
   * A collection of all urls employed by the kpi api.
   */
  paths: paths,
};
