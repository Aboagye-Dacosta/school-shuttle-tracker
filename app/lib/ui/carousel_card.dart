import 'package:app/ui/space.dart';
import 'package:flutter/material.dart';

import '../presentation/colors.dart';
import '../presentation/sizing.dart';

class BusCarousel extends StatelessWidget {
  const BusCarousel({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      color: AppColors.primary,
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          Positioned(
            bottom: -40,
            right: 0,
            child: Image.asset(
              "assets/images/bus.png",
              width: AppSizing.h_120,
            ),
          ),
          SizedBox(
            child: Padding(
              padding: const EdgeInsets.all(AppPadding.p_16),
              child: SizedBox(
                  width: double.infinity,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Never Miss A Ride",
                        style: Theme.of(context)
                            .textTheme
                            .headlineSmall!
                            .copyWith(
                                fontWeight: FontWeight.bold,
                                color: AppColors.greyLight,
                                fontSize: AppFontSizes.fs_24),
                      ),
                      const Space(
                        height: AppSizing.h_8,
                      ),
                      SizedBox(
                        width: MediaQuery.of(context).size.width * 0.7,
                        child: Text(
                          "More details Please rate this book Please write down your comment Reply Follow Followed This is the last chapter.",
                          style: Theme.of(context).textTheme.bodyMedium,
                        ),
                      ),
                    ],
                  )),
            ),
          ),
        ],
      ),
    );
  }
}
