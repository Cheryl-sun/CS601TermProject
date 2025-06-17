import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.preprocessing import LabelEncoder

# Data from the table
data = {
    'Weather': ['sunny', 'rainy', 'sunny', 'rainy', 'sunny', 'overcast', 'sunny', 'overcast', 'rainy', 'rainy'],
    'Temperature': ['hot', 'mild', 'cold', 'cold', 'cold', 'mild', 'hot', 'hot', 'hot', 'mild'],
    'Wind': ['low', 'high', 'low', 'high', 'high', 'low', 'low', 'high', 'high', 'low'],
    'Play': ['no', 'yes', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'yes']
}

df = pd.DataFrame(data)

# Encode categorical variables
le = LabelEncoder()
for column in df.columns:
    df[column] = le.fit_transform(df[column])

# Separate features and target
X = df[['Weather', 'Temperature', 'Wind']]
y = df['Play']

# Train a decision tree using Gini index
clf = DecisionTreeClassifier(criterion='gini', max_depth=2)
clf.fit(X, y)

# Show the root and one level below
from sklearn.tree import export_text

tree_rules = export_text(clf, feature_names=['Weather', 'Temperature', 'Wind'])
print(tree_rules)
