/* eslint-disable @typescript-eslint/interface-name-prefix */
import {IIdentity} from '@essential-projects/iam_contracts';

import {Request} from 'express';

/**
 * Extends the base HttpRequest object to include content exlusive to the kpi api.
 */
export interface KpiRequest extends Request { // TODO: Apply I-prefix
  identity: IIdentity;
}
