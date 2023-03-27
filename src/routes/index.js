import {Router} from 'express'

import root from './root'

const router = Router

router.arguments(root.default)

export default router
