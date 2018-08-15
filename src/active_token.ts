import {Runtime} from '@process-engine/process_engine_contracts';

export class ActiveToken {
  public processModelId: string;
  public flowNodeId: string;
  public token: Runtime.Types.ProcessToken;
}
