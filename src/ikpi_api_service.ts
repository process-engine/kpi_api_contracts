import {IIdentity} from '@essential-projects/iam_contracts';

import {ActiveToken} from './active_token';
import {AverageFlowNodeRuntime} from './average_flownode_runtime';

export interface IKpiApiService {
  /**
   * Gets the AverageFlowNodeRuntime for every FlowNode in a give ProcessModel.
   * @param processModelId The Id of the PorcessModel.
   * @param identity The identity to check claims for.
   */
  getAverageRuntimeForProcessModel(processModelId: string, identity: IIdentity): Array<AverageFlowNodeRuntime>;

  /**
   * Gets the AverageFlowNodeRuntime for a specific FlowNode inside a ProcessModel.
   * @param processModelId The Id of the ProcessModel.
   * @param flowNodeId The Id of the specific FlowNode from whcih to get the average runtime.
   * @param identity The identity to check claims for.
   */
  getAverageRuntimeForFlowNode(processModelId: string, flowNodeId: string, identity: IIdentity): AverageFlowNodeRuntime;

  /**
   * Gets all active Tokens for a given ProcessModelId.
   * @param processModelId The Id of the ProcessModel.
   * @param identity The identity to check claims for.
   */
  getActiveTokensForProcessModel(processModelId: string, identity: IIdentity): Array<ActiveToken>;

  /**
   * Gets all active Tokens for a specific FlowNode inside a ProcessModel.
   * @param processModelId The Id of the ProcessModel.
   * @param flowNodeId The Id of the sepcific FlowNode from whcih to get the active Tokens.
   * @param identity The identity to check claims for.
   */
  getActiveTokensForFlowNode(processModelId: string, flowNodeId: string, identity: IIdentity): Array<ActiveToken>;
}
