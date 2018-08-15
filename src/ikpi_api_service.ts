import {IIdentity} from '@essential-projects/iam_contracts';

import {ActiveToken} from './active_token';
import {AverageFlowNodeRuntime} from './average_flownode_runtime';

export interface IKpiApiService {
  /**
   * Gets the AverageFlowNodeRuntime for every FlowNode in a give ProcessModel.
   * @param processModelId The Id of the PorcessModel.
   * @param identity The identity to check claims for.
   */
  getAverageRuntimeForProcessModel(identity: IIdentity, processModelId: string): Array<AverageFlowNodeRuntime>;

  /**
   * Gets the AverageFlowNodeRuntime for a specific FlowNode inside a ProcessModel.
   * @param processModelId The Id of the ProcessModel.
   * @param flowNodeId The Id of the specific FlowNode from whcih to get the average runtime.
   * @param identity The identity to check claims for.
   */
  getAverageRuntimeForFlowNod(identity: IIdentity, processModelId: string, flowNodeId: string): AverageFlowNodeRuntime;

  /**
   * Gets all active Tokens for a given ProcessModelId.
   * @param processModelId The Id of the ProcessModel.
   * @param identity The identity to check claims for.
   */
  getActiveTokensForProcessModel(identity: IIdentity, processModelId: string): Array<ActiveToken>;

  /**
   * Gets all active Tokens for a specific FlowNode inside a ProcessModel.
   * @param processModelId The Id of the ProcessModel.
   * @param flowNodeId The Id of the sepcific FlowNode from whcih to get the active Tokens.
   * @param identity The identity to check claims for.
   */
  getActiveTokensForFlowNode(identity: IIdentity, flowNodeId: string): Array<ActiveToken>;
}
