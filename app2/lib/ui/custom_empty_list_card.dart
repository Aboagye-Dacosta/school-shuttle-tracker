import 'package:app2/presentation/colors.dart';
import 'package:flutter/material.dart';

class CustomEmptyListCard extends StatelessWidget {
  final String titleMessage;
  final String descriptionMessage;
  const CustomEmptyListCard(
      {super.key,
      required this.titleMessage,
      required this.descriptionMessage});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Icon(Icons.sms_failed_sharp),
            const SizedBox(
              height: 24,
            ),
            Text(
              titleMessage,
              style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                    fontSize: 18,
                    color: AppColors.grey_800,
                  ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(
              height: 8,
            ),
            Text(
              descriptionMessage,
              style: Theme.of(context)
                  .textTheme
                  .headlineSmall!
                  .copyWith(fontSize: 12, color: AppColors.grey_400),
              textAlign: TextAlign.center,
            )
          ],
        ),
      ),
    );
  }
}
