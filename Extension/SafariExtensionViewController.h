//
//  SafariExtensionViewController.h
//  Extension
//
//  Created by Yannick on 18.10.18.
//  Copyright © 2018 Yannick Weiss. All rights reserved.
//

#import <SafariServices/SafariServices.h>

@interface SafariExtensionViewController : SFSafariExtensionViewController

+ (SafariExtensionViewController *)sharedController;

@end
