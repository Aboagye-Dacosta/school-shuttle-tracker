import 'package:app2/presentation/colors.dart';
import 'package:app2/presentation/sizing.dart';
import 'package:app2/ui/button.dart';
import 'package:app2/ui/feedback_rating.dart';
import 'package:app2/ui/input.dart';
import 'package:flutter/material.dart';

import '../../../ui/space.dart';

class FeedbackPage extends StatelessWidget {
  FeedbackPage({super.key});
  final TextEditingController controller = TextEditingController();

  static String pageName = "feedback";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(
            vertical: AppSizing.h_16,
            horizontal: AppSizing.h_32,
          ),
          child: SingleChildScrollView(
            child: Column(
              children: [
                Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Image.asset(
                      "assets/images/feedback.jpg",
                      height: AppSizing.h_120,
                    ),
                    const Space(),
                    const Text("Want help us or report an issue"),
                    const Space(
                      height: AppSizing.s_4,
                    ),
                    const Text("Don't hesitate")
                  ],
                ),
                const Space(),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Input(controller: controller, label: "Title"),
                    const Space(
                      height: AppSizing.h_24,
                    ),
                    Input(controller: controller, label: "Description"),
                    const Space(
                      height: AppSizing.h_24,
                    ),
                    const Text("Rate your feedback"),
                    FeedbackRating(getSelected: (selected) {}),
                    const Space(
                      height: AppSizing.h_24,
                    ),
                    Button(
                      onPressed: () => {},
                      label: "Submit",
                    )
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
