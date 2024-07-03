import 'package:app2/presentation/colors.dart';
import 'package:app2/presentation/sizing.dart';
import 'package:app2/ui/space.dart';
import 'package:flutter/material.dart';

import '../../../ui/button.dart';

class RouteListings extends StatelessWidget {
  const RouteListings({super.key});

  static String pageName = "destinations";

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(
        vertical: AppSizing.h_16,
        horizontal: AppSizing.h_32,
      ),
      child: Column(
        children: [
          Expanded(
            child: ListView.separated(
                itemBuilder: (context, _) => const RouteCard(),
                separatorBuilder: (context, _) => const Space(),
                itemCount: 5),
          )
        ],
      ),
    );
  }
}

class RouteCard extends StatelessWidget {
  const RouteCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Card(
      color: AppColors.white,
      clipBehavior: Clip.antiAliasWithSaveLayer,
      child: Column(
        children: [
          SizedBox(
            child: Padding(
              padding: const EdgeInsets.all(AppPadding.p_16),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  const DestinationMark(),
                  Container(
                    width: 2,
                    height: AppSizing.h_32,
                    margin: const EdgeInsets.only(left: AppSizing.h_8),
                    decoration: BoxDecoration(
                      color: AppColors.primary,
                    ),
                  ),
                  const DestinationMark(),
                ],
              ),
            ),
          ),
          Container(
            color: AppColors.grey_700,
            width: double.infinity,
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Flexible(
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Container(
                          margin: const EdgeInsets.only(right: 2),
                          padding: const EdgeInsets.symmetric(
                              vertical: AppPadding.p_4,
                              horizontal: AppPadding.p_16),
                          decoration: BoxDecoration(
                              color: AppColors.yellow,
                              borderRadius:
                                  BorderRadius.circular(AppSizing.h_54)),
                          child: Text(
                            "4 stops",
                            style: TextStyle(
                              fontSize: AppFontSizes.fs_8,
                              fontWeight: FontWeight.bold,
                              color: AppColors.white,
                            ),
                          ),
                        ),
                        Text(
                          "along the way",
                          style: TextStyle(
                              fontSize: AppFontSizes.fs_12,
                              fontWeight: FontWeight.bold),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(
                    width: AppSizing.h_120,
                    child: Button(
                      onPressed: () => {},
                      label: "Switch",
                    ),
                  )
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}

class DestinationMark extends StatelessWidget {
  const DestinationMark({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Container(
          width: AppSizing.h_24,
          height: AppSizing.h_24,
          margin: const EdgeInsets.only(right: AppSizing.s_4),
          decoration: BoxDecoration(
              color: AppColors.grey_700,
              borderRadius: BorderRadius.circular(
                AppSizing.h_24,
              )),
        ),
        Container(
          width: AppSizing.h_54,
          height: 1.0,
          color: AppColors.primary,
        ),
        Container(
          margin: const EdgeInsets.only(left: AppSizing.s_4),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Container(
                      height: AppSizing.h_24,
                      width: AppSizing.h_24,
                      decoration: BoxDecoration(
                          color: AppColors.greyLight,
                          borderRadius: BorderRadius.circular(AppSizing.h_24)),
                      child: const Center(
                          child: Icon(
                        Icons.car_crash,
                        size: AppSizing.h_16,
                      ))),
                  const Space(
                    height: 0,
                    width: AppSizing.h_8,
                  ),
                  Text(
                    "Start Location".toUpperCase(),
                    style: const TextStyle(fontSize: AppFontSizes.fs_12),
                  ),
                ],
              ),
              const Space(
                height: AppSizing.h_8,
              ),
              Container(
                decoration: BoxDecoration(
                    color: AppColors.greyLight,
                    borderRadius: BorderRadius.circular(AppSizing.h_8)),
                padding: const EdgeInsets.all(AppPadding.p_16),
                child: Text(
                  "Konte round about".toUpperCase(),
                  style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                        fontWeight: FontWeight.bold,
                        fontSize: AppFontSizes.fs_12,
                        color: AppColors.primary,
                      ),
                ),
              )
            ],
          ),
        )
      ],
    );
  }
}
