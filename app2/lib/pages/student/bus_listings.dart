import "package:app2/presentation/colors.dart";
import "package:app2/presentation/sizing.dart";
import "package:app2/ui/space.dart";
import "package:flutter/material.dart";
import "package:get/get.dart";

class BusListings extends StatelessWidget {
  const BusListings({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: AppPadding.p_24,vertical: AppPadding.p_16),
        child: Column(
          children: [
            Expanded(
                child: ListView.separated(
                    itemBuilder: (context, _) => Card(
                          clipBehavior: Clip.antiAliasWithSaveLayer,
                          color: AppColors.white,
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              GestureDetector(
                                onTap: () => {},
                                child: Padding(
                                  padding:
                                      const EdgeInsets.all(AppPadding.p_16),
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        "K0893-Gh",
                                        style: Theme.of(context)
                                            .textTheme
                                            .headlineSmall!
                                            .copyWith(
                                                fontWeight: FontWeight.bold,
                                                fontSize: AppFontSizes.fs_16,
                                                color: AppColors.primary),
                                      ),
                                      const Space(
                                        height: AppSizing.h_8,
                                      ),
                                      Row(
                                        children: [
                                          Container(
                                            height: AppSizing.h_16,
                                            width: AppSizing.h_16,
                                            decoration: BoxDecoration(
                                                color: AppColors.red,
                                                borderRadius:
                                                    BorderRadius.circular(
                                                        AppSizing.h_16)),
                                          ),
                                          const Space(
                                            height: 0,
                                            width: AppSizing.h_8,
                                          ),
                                          Text(
                                            "Inactive",
                                            style: Theme.of(context)
                                                .textTheme
                                                .bodySmall,
                                          )
                                        ],
                                      ),
                                      const Space(
                                        height: AppSizing.h_8,
                                      ),
                                      Text(
                                        "Destinations",
                                        style: Theme.of(context)
                                            .textTheme
                                            .bodyMedium!
                                            .copyWith(
                                                fontWeight: FontWeight.bold),
                                      ),
                                      const Space(
                                        height: AppSizing.h_8,
                                      ),
                                      const Row(
                                        children: [
                                          DestinationCard(
                                            destination: "Katanga",
                                          ),
                                          Space(
                                            height: 0,
                                            width: AppSizing.h_8,
                                          ),
                                          DestinationCard(
                                            destination: "Independence hall",
                                          ),
                                        ],
                                      )
                                    ],
                                  ),
                                ),
                              ),
                              Container(
                                color: AppColors.greyLight,
                                child: Row(
                                  mainAxisSize: MainAxisSize.max,
                                  children: [
                                    Expanded(
                                        flex: 1,
                                        child: TextButton(
                                            onPressed: () =>
                                                {Get.toNamed("/busDetail")},
                                            child: Text(
                                              "View Details".toUpperCase(),
                                              style: const TextStyle(
                                                  fontSize: AppFontSizes.fs_12),
                                            ))),
                                    Divider(
                                      height: AppSizing.h_24,
                                      thickness: 8,
                                      color: AppColors.primary,
                                    ),
                                    Expanded(
                                      flex: 1,
                                      child: TextButton(
                                        onPressed: () => {},
                                        child: Text(
                                          "Go to map".toUpperCase(),
                                          style: const TextStyle(
                                              fontSize: AppFontSizes.fs_12),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              )
                            ],
                          ),
                        ),
                    separatorBuilder: (context, _) => const Space(
                          height: AppSizing.h_24,
                        ),
                    itemCount: 5))
          ],
        ));
  }
}

class DestinationCard extends StatelessWidget {
  final String destination;
  const DestinationCard({super.key, required this.destination});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(AppPadding.p_8 / 2),
      decoration: BoxDecoration(color: AppColors.primary),
      child: Text(
        destination,
        style: Theme.of(context).textTheme.bodySmall!.copyWith(
              fontWeight: FontWeight.bold,
              color: AppColors.white,
            ),
      ),
    );
  }
}
