
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNMapkitSpec.h"

@interface Mapkit : NSObject <NativeMapkitSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Mapkit : NSObject <RCTBridgeModule>
#endif

@end
