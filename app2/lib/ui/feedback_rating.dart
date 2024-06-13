import "package:app2/presentation/colors.dart";
import "package:app2/presentation/sizing.dart";
import "package:flutter/material.dart";

class FeedbackRating extends StatefulWidget {
  final int tabCount;
  final Function(int selected) getSelected;
  const FeedbackRating(
      {super.key, required this.getSelected, this.tabCount = 5});

  @override
  State<FeedbackRating> createState() => _FeedbackRatingState();
}

class _FeedbackRatingState extends State<FeedbackRating> {
  int selectedTab = -1;
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.max,
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        for (int i = 0; i < widget.tabCount; i++)
          InkWell(
            borderRadius: BorderRadius.circular(AppSizing.h_16),
            onTap: () => {
              setState(() {
                selectedTab = i;
                widget.getSelected(i + 1);
              })
            },
            child: Flexible(
              child: Card(
                color: selectedTab == i ? AppColors.primary : null,
                child: Container(
                  padding: const EdgeInsets.all(AppSizing.h_16),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(AppSizing.h_8),
                  ),
                  child: Center(child: Text("${i + 1}")),
                ),
              ),
            ),
          ),
      ],
    );
  }
}
