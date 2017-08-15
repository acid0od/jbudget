/* ===========================================================================
 * Copyright (c) 2015 Comcast Corp. All rights reserved.
 * ===========================================================================
 *
 * Author: Alexander Ievstratiev
 * Created: 08/15/2017  1:42 PM
 */
package net.odtel.quiz.controller.handler;

import lombok.Data;

@Data
public class RestErrorMessage {
    private final int status;
    private final String type;
    private final String message;
}
