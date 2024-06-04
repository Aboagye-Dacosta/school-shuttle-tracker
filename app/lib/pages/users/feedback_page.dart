import 'package:app/presentation/colors.dart';
import 'package:app/presentation/sizing.dart';
import 'package:app/ui/app_bar.dart';
import 'package:app/ui/button.dart';
import 'package:app/ui/feedback_rating.dart';
import 'package:app/ui/input.dart';
import 'package:flutter/material.dart';

import '../../ui/space.dart';

class FeedbackPage extends StatelessWidget {
  FeedbackPage({super.key});
  TextEditingController controller = TextEditingController();

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
          child: Column(
            children: [
              const CustomAppBar(
                appTitle: "Feedback",
                hasBackBtn: true,
              ),
              const Space(),
              Expanded(
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
                            label:"Submit",
                          )
                        ],
                      )
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
