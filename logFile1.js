/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   logger file implementation
 * 
 * @description
 * 
 * @file        :   logFile1.js
 * @overview    :   used log4js for logging
 * @module      :    
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/

const log4js=require('../ishika-matta/node_modules/log4js');
const logger=log4js.getLogger();
logger.level='info';
logger.info('information');
logger.level='debug';
logger.debug('debug');