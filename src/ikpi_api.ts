import {IIdentity} from '@essential-projects/iam_contracts';

import {ActiveToken} from './active_token';
import {FlowNodeRuntimeInformation} from './flow_node_runtime_information';

export interface IKpiApi {
  /**
   * Gets the FlowNodeRuntimeInformation for every FlowNode in a give ProcessModel.
   *
   * @async
   * @param identity The identity to check claims for.
   * @param processModelId The ID of the PorcessModel.
   */
  getRuntimeInformationForProcessModel(identity: IIdentity, processModelId: string): Promise<Array<FlowNodeRuntimeInformation>>;

  /**
   * Gets the FlowNodeRuntimeInformation for a specific FlowNode inside a ProcessModel.
   *
   * @async
   * @param identity The identity to check claims for.
   * @param processModelId The ID of the ProcessModel.
   * @param flowNodeId The ID of the specific FlowNode from whcih to get the average runtime.
   */
  getRuntimeInformationForFlowNode(identity: IIdentity, processModelId: string, flowNodeId: string): Promise<FlowNodeRuntimeInformation>;

  /**
   * Gets all active Tokens for a given ProcessModelId.
   *
   * @async
   * @param identity The identity to check claims for.
   * @param processModelId The ID of the ProcessModel.
   */
  getActiveTokensForProcessModel(identity: IIdentity, processModelId: string): Promise<Array<ActiveToken>>;

  /**
   * Gets all active Tokens for a ProcessModel inside a Correlation.
   *
   * @async
   * @param identity The identity to check claims for.
   * @param processModelId The ID of the Correlation.
   * @param processModelId The ID of the ProcessModel.
   */
  getActiveTokensForCorrelationAndProcessModel(identity: IIdentity, correlationId: string, processModelId: string): Promise<Array<ActiveToken>>;

  /**
   * Gets all active Tokens for a given ProcessInstance.
   *
   * @async
   * @param identity The identity to check claims for.
   * @param processInstanceId The ID of the ProcessInstance.
   */
  getActiveTokensForProcessInstance(identity: IIdentity, processInstanceId: string): Promise<Array<ActiveToken>>;

  /**
   * Gets all active Tokens for a specific FlowNode inside a ProcessModel.
   *
   * @async
   * @param identity The identity to check claims for.
   * @param flowNodeId The ID of the sepcific FlowNode from whcih to get the active Tokens.
   */
  getActiveTokensForFlowNode(identity: IIdentity, flowNodeId: string): Promise<Array<ActiveToken>>;
}
