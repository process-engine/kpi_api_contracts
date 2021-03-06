const params = {
  correlationId: 'correlation_id',
  processInstanceId: ':process_instance_id',
  processModelId: ':process_model_id',
  flowNodeId: ':flow_node_id',
};

const paths = {
  getRuntimeInformationForProcessModel: `/process_model/${params.processModelId}/runtime_information`,
  getActiveTokensForProcessModel: `/process_model/${params.processModelId}/active_tokens`,
  getActiveTokensForCorrelationAndProcessModel: `/correlation/${params.correlationId}/process_model/${params.processModelId}/active_tokens`,
  getActiveTokensForProcessInstance: `/process_instance/${params.processInstanceId}/active_tokens`,
  getRuntimeInformationForFlowNode: `/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/runtime_information`,
  getActiveTokensForFlowNode: `/flow_node/${params.flowNodeId}/active_tokens`,
};

export const restSettings = {
  params: params,
  paths: paths,
};
