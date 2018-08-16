import {IIdentity} from '@essential-projects/iam_contracts';

import {Request} from 'express';

/**
 * Extends the base HttpRequest object to include content exlusive to the kpi api.
 */
export interface KpiRequest extends Request {
    /**
     * Contains the user specific auth token with which a user is performing requests against the api.
     */
    identity: IIdentity;
}
